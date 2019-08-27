import { Directive, Input, ViewContainerRef, TemplateRef } from "@angular/core";

@Directive({
  selector: "[unless]"
})
export class UnlessDirective {
  @Input() set unless(condition: boolean) {
    if (!condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}
}
