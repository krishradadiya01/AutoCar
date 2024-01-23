const LightColor = {
  backgroundColor: '#FFFFFF',
  GrayScale: '#E2E8F0',
  contrast: '#000000',
  GrayScale2: '#E2E8F3',
};

const DarkColor = {
  backgroundColor: '#101520',
  GrayScale: '#1E293B',
  contrast: '#FFFFFF',
  GrayScale2: '#334155',
};

const commonColor = {
  Primary: '#2F74FA',
};

export const colors = {
  light: {
    ...LightColor,
    ...commonColor,
  },

  dark: {
    ...DarkColor,
    ...commonColor,
  },
};
