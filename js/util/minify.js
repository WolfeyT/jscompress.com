import { transform } from '@babel/standalone';

export default function minify(code) {
  return transform(code, { presets: ['minify'], comments: false }).code;
}
