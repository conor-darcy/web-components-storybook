import { r as registerInstance, h } from './index-D6HONQSx.js';

const myComponentCss = ":host{display:block;background-color:pink;padding:10px;border-radius:5px;border:1px solid darkblue}div{color:darkblue;font-weight:bold}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: '6ceeb330c10da22f412f4eb11c456f8a598c02ec' }, "Hello, my name is ", this.first, " ", this.last, "."));
    }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
//# sourceMappingURL=my-component.entry.esm.js.map

//# sourceMappingURL=my-component.entry.js.map