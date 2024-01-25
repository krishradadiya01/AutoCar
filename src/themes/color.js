const LightColor = {
  backgroundColor: '#FFFFFF',
  GrayScale: '#E2E8F0',
  contrast: '#000000',
  GrayScale2: '#E2E8F3',
  BorderColor: '#E2E8F0',
};

const DarkColor = {
  backgroundColor: '#101520',
  GrayScale: '#1E293B',
  contrast: '#FFFFFF',
  GrayScale2: '#334155',
  BorderColor: '#334155',
};

const commonColor = {
  Primary: '#2F74FA',
  GrayScale3: '#94A3B8',
  Red: '#F56565',
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
