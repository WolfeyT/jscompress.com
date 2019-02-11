import { transform } from '@babel/standalone';

export default function minify(code) {
  // "builtins: false" fixes https://github.com/circlecell/jscompress.com/issues/40
  // TODO enable it back as soon as
  return transform(code, { presets: [['minify', { builtIns: false }]], comments: false }).code;
}
