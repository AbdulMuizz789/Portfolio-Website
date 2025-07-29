import DOMPurify from 'dompurify';

// Rate limiting utility
class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  private readonly maxAttempts: number;
  private readonly windowMs: number;

  constructor(maxAttempts: number = 3, windowMs: number = 60000) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  isAllowed(key: string): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(key) || [];
    
    // Remove old attempts outside the window
    const validAttempts = attempts.filter(time => now - time < this.windowMs);
    
    if (validAttempts.length >= this.maxAttempts) {
      return false;
    }

    // Add current attempt
    validAttempts.push(now);
    this.attempts.set(key, validAttempts);
    
    return true;
  }

  getRemainingTime(key: string): number {
    const attempts = this.attempts.get(key) || [];
    if (attempts.length < this.maxAttempts) return 0;
    
    const oldestAttempt = Math.min(...attempts);
    const remainingTime = this.windowMs - (Date.now() - oldestAttempt);
    
    return Math.max(0, Math.ceil(remainingTime / 1000));
  }
}

// Input sanitization
export const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input, { 
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
    KEEP_CONTENT: true
  }).trim();
};

// Email validation with stricter rules
export const validateEmail = (email: string): boolean => {
  const sanitizedEmail = sanitizeInput(email);
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
  return emailRegex.test(sanitizedEmail) && sanitizedEmail.length <= 254;
};

// Content validation
export const validateContent = (content: string): { isValid: boolean; message?: string } => {
  const sanitized = sanitizeInput(content);
  
  if (sanitized.length === 0) {
    return { isValid: false, message: "Content cannot be empty" };
  }
  
  if (sanitized.length > 2000) {
    return { isValid: false, message: "Content is too long (max 2000 characters)" };
  }
  
  // Check for potential spam patterns
  const spamPatterns = [
    /(.)\1{10,}/i, // Repeated characters
    /(https?:\/\/[^\s]+){3,}/i, // Multiple URLs
    /[A-Z]{20,}/i, // Excessive caps
  ];
  
  for (const pattern of spamPatterns) {
    if (pattern.test(sanitized)) {
      return { isValid: false, message: "Content appears to be spam" };
    }
  }
  
  return { isValid: true };
};

// Create rate limiter instance
export const formRateLimiter = new RateLimiter(3, 300000); // 3 attempts per 5 minutes

// Environment configuration with fallbacks
export const getEmailConfig = () => {
  // For development/demo purposes, we'll use the existing values
  // In production, these should come from environment variables
  const config = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_rb2buos',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_jsp76ys',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '21xqX2Uw35_NLFVZf'
  };

  // In production, validate that env vars are set
  if (import.meta.env.PROD) {
    const missing = Object.entries(config)
      .filter(([, value]) => !value || value.startsWith('service_') || value.startsWith('template_') || value.length < 10)
      .map(([key]) => key);
    
    if (missing.length > 0) {
      console.warn('EmailJS configuration may be using default values. Consider setting environment variables:', missing);
    }
  }

  return config;
};

// Error messages that don't expose system internals
export const getSecureErrorMessage = (error: any): string => {
  // Log the actual error for debugging (server-side only)
  if (import.meta.env.DEV) {
    console.error('Detailed error:', error);
  }
  
  // Return generic user-friendly messages
  if (error?.status === 429) {
    return "Too many requests. Please try again later.";
  }
  
  if (error?.message?.includes('network') || error?.message?.includes('fetch')) {
    return "Network error. Please check your connection and try again.";
  }
  
  return "Something went wrong. Please try again later.";
};