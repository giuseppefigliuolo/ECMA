/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AcmeHeader {
    }
    interface AcmeMenu {
    }
    interface FormFinanziabilita {
    }
}
declare global {
    interface HTMLAcmeHeaderElement extends Components.AcmeHeader, HTMLStencilElement {
    }
    var HTMLAcmeHeaderElement: {
        prototype: HTMLAcmeHeaderElement;
        new (): HTMLAcmeHeaderElement;
    };
    interface HTMLAcmeMenuElement extends Components.AcmeMenu, HTMLStencilElement {
    }
    var HTMLAcmeMenuElement: {
        prototype: HTMLAcmeMenuElement;
        new (): HTMLAcmeMenuElement;
    };
    interface HTMLFormFinanziabilitaElement extends Components.FormFinanziabilita, HTMLStencilElement {
    }
    var HTMLFormFinanziabilitaElement: {
        prototype: HTMLFormFinanziabilitaElement;
        new (): HTMLFormFinanziabilitaElement;
    };
    interface HTMLElementTagNameMap {
        "acme-header": HTMLAcmeHeaderElement;
        "acme-menu": HTMLAcmeMenuElement;
        "form-finanziabilita": HTMLFormFinanziabilitaElement;
    }
}
declare namespace LocalJSX {
    interface AcmeHeader {
    }
    interface AcmeMenu {
    }
    interface FormFinanziabilita {
    }
    interface IntrinsicElements {
        "acme-header": AcmeHeader;
        "acme-menu": AcmeMenu;
        "form-finanziabilita": FormFinanziabilita;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "acme-header": LocalJSX.AcmeHeader & JSXBase.HTMLAttributes<HTMLAcmeHeaderElement>;
            "acme-menu": LocalJSX.AcmeMenu & JSXBase.HTMLAttributes<HTMLAcmeMenuElement>;
            "form-finanziabilita": LocalJSX.FormFinanziabilita & JSXBase.HTMLAttributes<HTMLFormFinanziabilitaElement>;
        }
    }
}