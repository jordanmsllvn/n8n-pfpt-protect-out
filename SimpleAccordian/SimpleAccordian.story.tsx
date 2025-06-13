import type { Meta, StoryObj } from '@storybook/react';
import SimpleAccordion from './SimpleAccordion';
import type { SimpleAccordionContent } from './SimpleAccordion';

const meta: Meta<typeof SimpleAccordion> = {
  title: 'Components/SimpleAccordion',
  component: SimpleAccordion,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    content: {
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Base demo data converted from YML
const baseAccordionData: SimpleAccordionContent = {
  field_simple_accordion_items: [
    {
      field_plain_description: 'I'm already a Proofpoint customer, how will my existing plan roll into the new packages?',
      field_body: `<p>Lorem ipsum dolor <a href="#">sit amet</a>, consectetur adipiscing elit. Quisque vel porta nulla. Vestibulum fermentum nunc nunc, a ultricies nunc ornare eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum ipsum in mauris luctus tempus.</p>
                  <p>
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <h4>Heading 4</h4>
                    <h5>Heading 5</h5>
                    <h6>Heading 6</h6>
                    <ul>
                      <li>Unordered List Item 1</li>
                      <li>Unordered List Item 2</li>
                      <li>Unordered List Item 3</li>
                    </ul>
                    <ol>
                      <li>Ordered List Item 1</li>
                      <li>Ordered List Item 2</li>
                      <li>Ordered List Item 3</li>
                    </ol>
                 </p>`
    },
    {
      field_plain_description: 'How are plans priced?',
      field_body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel porta nulla. Vestibulum fermentum nunc nunc, a ultricies nunc ornare eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum ipsum in mauris luctus tempus.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel porta nulla. Vestibulum fermentum nunc nunc, a ultricies nunc ornare eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum ipsum in mauris luctus tempus.</p>'
    },
    {
      field_plain_description: 'How do I know which plan is right for my organization?',
      field_body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel porta nulla. Vestibulum fermentum nunc nunc, a ultricies nunc ornare eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum ipsum in mauris luctus tempus.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel porta nulla. Vestibulum fermentum nunc nunc, a ultricies nunc ornare eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum ipsum in mauris luctus tempus.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel porta nulla. Vestibulum fermentum nunc nunc, a ultricies nunc ornare eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum ipsum in mauris luctus tempus.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel porta nulla. Vestibulum fermentum nunc nunc, a ultricies nunc ornare eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum ipsum in mauris luctus tempus.</p>'
    },
    {
      field_plain_description: 'Can I add a Defend Data offering to a Protect People package?',
      field_body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel porta nulla. Vestibulum fermentum nunc nunc, a ultricies nunc ornare eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum ipsum in mauris luctus tempus.</p>'
    }
  ]
};

// Default story
export const Default: Story = {
  args: {
    content: baseAccordionData
  }
};

// Light background variant
export const LightBackground: Story = {
  args: {
    content: baseAccordionData
  },
  decorators: [
    (Story) => (
      <div className="v3-light-bg">
        <Story />
      </div>
    )
  ]
};

// Gray background variant
export const GrayBackground: Story = {
  args: {
    content: baseAccordionData
  },
  decorators: [
    (Story) => (
      <div className="v3-light-bg v3-gray-bg">
        <Story />
      </div>
    )
  ]
};

// Dark background variant
export const DarkBackground: Story = {
  args: {
    content: baseAccordionData
  },
  decorators: [
    (Story) => (
      <div className="v3-dark-bg">
        <Story />
      </div>
    )
  ]
};

// Padded container variant
export const PaddedContainer: Story = {
  args: {
    content: baseAccordionData
  },
  decorators: [
    (Story) => (
      <div className="v3-light-bg v3-padded-container">
        <Story />
      </div>
    )
  ]
};

// Rebrand version
export const RebrandVersion: Story = {
  args: {
    content: baseAccordionData
  },
  decorators: [
    (Story) => (
      <div className="v3-padded-container v3-light-bg protect-page">
        <Story />
      </div>
    )
  ]
};

// Single item accordion
export const SingleItem: Story = {
  args: {
    content: {
      field_simple_accordion_items: [
        {
          field_plain_description: 'Single accordion item',
          field_body: '<p>This is a single accordion item for testing purposes.</p>'
        }
      ]
    }
  }
};

// Accordion with custom classes
export const WithCustomClasses: Story = {
  args: {
    content: {
      ...baseAccordionData,
      classes: ['custom-accordion-class']
    }
  }
};

// Accordion with custom attributes
export const WithCustomAttributes: Story = {
  args: {
    content: {
      ...baseAccordionData,
      attributes: {
        'data-testid': 'custom-accordion',
        'aria-label': 'Custom accordion with attributes'
      }
    }
  }
};

// Short content variant
export const ShortContent: Story = {
  args: {
    content: {
      field_simple_accordion_items: [
        {
          field_plain_description: 'Short question?',
          field_body: '<p>Short answer.</p>'
        },
        {
          field_plain_description: 'Another short question?',
          field_body: '<p>Another short answer with <a href="#">a link</a>.</p>'
        }
      ]
    }
  }
};

// Long content variant
export const LongContent: Story = {
  args: {
    content: {
      field_simple_accordion_items: [
        {
          field_plain_description: 'This is a very long question that might wrap to multiple lines in the accordion header?',
          field_body: `<p>This is a very long answer with multiple paragraphs and various content types to test the accordion's ability to handle extensive content.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <ul>
                        <li>First list item with lots of text</li>
                        <li>Second list item with even more text content</li>
                        <li>Third list item continuing the pattern</li>
                      </ul>
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`
        }
      ]
    }
  }
};
