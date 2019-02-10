import minify from './minify';

export default function validate(code) {
  if (code === '') {
    return {
      isValid: false,
      error: 'Empty string is not valid code'
    };
  }

  try {
    minify(code);
  } catch (e) {
    return {
      isValid: false,
      error: `${e}`
    };
  }

  return { isValid: true };
}
