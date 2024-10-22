import {
  AfterViewInit,
  Component,
  Injectable,
  Renderer2,
  RendererFactory2,
  RendererType2,
  ViewEncapsulation,
} from "@angular/core";
import { ɵDomSharedStylesHost } from "@angular/platform-browser";
/** @title Form field appearance variants */

@Injectable()
export class CustomRendererFactory implements RendererFactory2 {
  private defaultRendererFactory: RendererFactory2;

  constructor(defaultRendererFactory: RendererFactory2) {
    this.defaultRendererFactory = defaultRendererFactory;
  }

  createRenderer(element: any, type: RendererType2 | null): Renderer2 {
    const rootNode = element.getRootNode?.();
    if (
      typeof ShadowRoot !== "undefined" &&
      rootNode instanceof ShadowRoot &&
      type
    ) {
      type.encapsulation = ViewEncapsulation.ShadowDom;
    }
    return this.defaultRendererFactory.createRenderer(element, type);
  }

  // Other methods of RendererFactory2 should be implemented as well
}
@Component({
  selector: "my-app",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements AfterViewInit {
  constructor(
    private rendererFactory2: RendererFactory2,
    private domSharedStylesHost: ɵDomSharedStylesHost
  ) {
    // this.overrideCreateRenderer();
    // const addStyles = domSharedStylesHost.addStyles.bind(domSharedStylesHost);
    // console.info(`AddStyles: ${addStyles}`);
    // domSharedStylesHost.addStyles = (styles: string[]) => {
    //   console.info(`adding styles ${styles}`);
    //   const firstEntry = Array.from(
    //     (domSharedStylesHost as any)._hostNodes.entries()
    //   )[0] as any;
    //   const prevList = (domSharedStylesHost as any)._hostNodes as Map<
    //     string,
    //     any
    //   >;
    //   console.info(
    //     `List of host nodes: ${Array.from(prevList.keys()).join(`, `)}`
    //   );
    //   console.info(`root node: ${this.rootNode}`);
    //   const newEntry = new Map();
    //   newEntry.set(firstEntry[0], firstEntry[1]);
    //   this.rootNode = undefined;
    //   (domSharedStylesHost as any)._hostNodes = this.rootNode
    //     ? [this.rootNode]
    //     : newEntry;
    //   addStyles(styles);
    //   (domSharedStylesHost as any)._hostNodes = prevList;
    //   //
    //   // for (const style of styles) {
    //   //   (domSharedStylesHost as any)._addStyleToHost(
    //   //     this.rootNode
    //   //       ? this.rootNode
    //   //       : (domSharedStylesHost as any)._hostNodes[0],
    //   //     style
    //   //   );
    //   // }
    // };
  }

  loaded = false;
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loaded = true;
    }, 2000);
  }
  private rootNode: any;
  private overrideCreateRenderer() {
    // Access the original createRenderer method
    const originalCreateRenderer = this.rendererFactory2.createRenderer.bind(
      this.rendererFactory2
    );

    // Override the createRenderer method
    (this.rendererFactory2 as any).createRenderer = (
      element: any,
      type: RendererType2 | null
    ): Renderer2 => {
      this.rootNode = element.getRootNode?.();

      // Access and modify internal variables or properties if needed
      if (
        typeof ShadowRoot !== "undefined" &&
        this.rootNode instanceof ShadowRoot
      ) {
        //element = this.rootNode;
        console.info(`it is a shadow node`);
      }

      // Call the original method with the modified type
      const renderer = originalCreateRenderer(element, type);
      // const appendChild = renderer.appendChild.bind(renderer);
      // renderer.appendChild = (parent: any, newChild: any) => {
      //   // console.info(
      //   //   `added new element ${JSON.parse(newChild ? newChild : "")}`
      //   // );
      //   appendChild(parent, newChild);
      // };
      return renderer;
    };
  }
}
