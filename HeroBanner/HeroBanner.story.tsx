```tsx
import type { Meta, StoryObj } from '@storybook/react';
import HeroBanner from './HeroBanner';
import type { HeroBannerProps } from './HeroBanner';

const meta: Meta<typeof HeroBanner> = {
  title: 'Components/HeroBanner',
  component: HeroBanner,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A hero banner component with background image, main content, and featured content section.',
      },
    },
  },
  argTypes: {
    content: {
      description: 'The content object containing all hero banner data',
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeroBanner>;

// Base story data
const baseContent: HeroBannerProps['content'] = {
  field_hhb_image: {
    src: '../../../assets/homepage_hero_bg.webp',
    alt: 'Homepage hero banner',
    width: 1512,
    height: 836,
    loading: 'eager',
  },
  field_component_title: 'Break the Attack Chain',
  field_hhb_body: 'Protect your people from advanced email attacks and identity-based threats. Defend sensitive data from theft, loss and insider threats.',
  field_hhb_feat_link: {
    url: '#',
    attributes: {
      class: [],
      target: '_blank',
    },
  },
  field_hhb_feat_eyebrow: 'Webinar',
  field_hhb_feat_headline: 'Proofpoint Discovery Hands-On Lab',
  field_hhb_feat_body: 'Combat Data Loss and Insider Risk',
  field_hhb_feat_date: 'October 10, 3:30ET',
  field_hhb_feat_image: {
    src: '../../../assets/homepage_hero_feature.webp',
    alt: 'Featured content image',
    width: 125,
    height: 166,
    loading: 'eager',
  },
};

export const Default: Story = {
  args: {
    content: baseContent,
  },
};

export const WithoutDate: Story = {
  args: {
    content: {
      ...baseContent,
      field_hhb_feat_date: undefined,
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Hero banner without a featured date field.',
      },
    },
  },
};

export const WithCustomClass: Story = {
  args: {
    content: {
      ...baseContent,
      attributes: {
        className: 'custom-hero-variant',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Hero banner with additional CSS class applied.',
      },
    },
  },
};

export const AlternativeContent: Story = {
  args: {
    content: {
      ...baseContent,
      field_component_title: 'Secure Your Digital Future',
      field_hhb_body: 'Advanced cybersecurity solutions tailored for modern enterprises. Stay ahead of evolving threats with our comprehensive security platform.',
      field_hhb_feat_eyebrow: 'White Paper',
      field_hhb_feat_headline: 'The Future of Cybersecurity',
      field_hhb_feat_body: 'Essential strategies for 2024 and beyond',
      field_hhb_feat_date: 'Available Now',
      field_hhb_feat_link: {
        url: '/download',
        attributes: {
          class: ['download-link'],
          target: '_self',
        },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Hero banner with alternative content to showcase flexibility.',
      },
    },
  },
};

export const LongContent: Story = {
  args: {
    content: {
      ...baseContent,
      field_component_title: 'Comprehensive Enterprise Security Solutions for Modern Digital Infrastructure',
      field_hhb_body: 'In today\'s rapidly evolving digital landscape, organizations face unprecedented security challenges. Our comprehensive suite of enterprise security solutions provides multi-layered protection against advanced persistent threats, ransomware, phishing attacks, and insider threats while ensuring compliance with industry regulations.',
      field_hhb_feat_headline: 'Advanced Threat Intelligence and Machine Learning-Powered Security Analytics Platform',
      field_hhb_feat_body: 'Discover how artificial intelligence and machine learning are revolutionizing cybersecurity threat detection and response capabilities',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Hero banner with longer content to test text overflow and responsive behavior.',
      },
    },
  },
};
```