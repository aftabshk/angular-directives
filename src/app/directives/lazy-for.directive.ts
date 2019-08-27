import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

/**
 * Add the template content to the DOM unless the condition is true.
 */
@Directive({ selector: "[lazyFor]" })
export class LazyForDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set lazyForOf(names) {
    names.forEach(name => {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: name
      });
    });
  }

  ngDoCheck() {
    console.log("lazy for Changes");
  }
}
