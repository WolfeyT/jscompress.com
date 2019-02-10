import MatreshkaObject from 'matreshka/object';
import minify from 'babel-preset-minify';
import { registerPreset } from '@babel/standalone';
import Upload from './tabs/upload';
import CopyPaste from './tabs/copy-paste';
import Output from './tabs/output';

registerPreset('minify', minify);

class Application extends MatreshkaObject {
  constructor() {
    super()
      .set({
        activeTabName: 'upload'
      })
      .addDataKeys(['upload', 'copyPaste', 'output'])
      .instantiate({
        upload: Upload,
        copyPaste: CopyPaste,
        output: Output
      })
      .on({
        '*@change:active': (evt) => {
          if (evt.value === true) {
            for (const tab of this) {
              if (tab !== evt.self) {
                tab.active = false;
              }
            }
          }
        },
        'upload@submitCode copyPaste@submitCode': (code) => {
          this.output.active = true;
          this.output.inputCode = code;
        }
      });
  }
}

export default new Application();
