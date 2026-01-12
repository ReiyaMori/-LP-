import React from 'react';

export interface StepItem {
  stepNumber: number;
  title: string;
  description: string;
  imageAlt: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  comment: string;
  avatarId: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ElementType;
}