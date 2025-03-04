import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { KebabPipe } from './kebab.pipe';
import { NodeComponent } from './node/node.component';
import { SocketComponent } from './socket/socket.component';
import { ControlDirective } from './control.directive';
import { SocketDirective } from './socket.directive';
import { CustomComponent } from './custom.component';
import * as i0 from "@angular/core";
export class ReteModule {
    constructor(injector) {
        const CustomElement = createCustomElement(CustomComponent, { injector });
        if (!customElements.get('rete-element'))
            customElements.define('rete-element', CustomElement);
    }
}
ReteModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ReteModule, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.NgModule });
ReteModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.2", ngImport: i0, type: ReteModule, declarations: [NodeComponent,
        SocketComponent,
        CustomComponent,
        ControlDirective,
        SocketDirective,
        KebabPipe], imports: [CommonModule], exports: [NodeComponent,
        CustomComponent,
        SocketComponent,
        ControlDirective,
        SocketDirective,
        KebabPipe] });
ReteModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ReteModule, providers: [
        KebabPipe,
        ControlDirective
    ], imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: ReteModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NodeComponent,
                        SocketComponent,
                        CustomComponent,
                        ControlDirective,
                        SocketDirective,
                        KebabPipe,
                    ],
                    imports: [
                        CommonModule
                    ],
                    providers: [
                        KebabPipe,
                        ControlDirective
                    ],
                    exports: [
                        NodeComponent,
                        CustomComponent,
                        SocketComponent,
                        ControlDirective,
                        SocketDirective,
                        KebabPipe
                    ],
                    entryComponents: [
                        NodeComponent,
                        SocketComponent,
                        CustomComponent
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFnQ3JELE1BQU0sT0FBTyxVQUFVO0lBQ3JCLFlBQVksUUFBa0I7UUFDNUIsTUFBTSxhQUFhLEdBQUcsbUJBQW1CLENBQUMsZUFBZSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUM7WUFBRSxjQUFjLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNoRyxDQUFDOzt1R0FKVSxVQUFVO3dHQUFWLFVBQVUsaUJBNUJuQixhQUFhO1FBQ2IsZUFBZTtRQUNmLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLFNBQVMsYUFHVCxZQUFZLGFBT1osYUFBYTtRQUNiLGVBQWU7UUFDZixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixTQUFTO3dHQVFBLFVBQVUsYUFsQlY7UUFDVCxTQUFTO1FBQ1QsZ0JBQWdCO0tBQ2pCLFlBTEMsWUFBWTsyRkFvQkgsVUFBVTtrQkE5QnRCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixTQUFTO3FCQUNWO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELFNBQVMsRUFBRTt3QkFDVCxTQUFTO3dCQUNULGdCQUFnQjtxQkFDakI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixTQUFTO3FCQUNWO29CQUNELGVBQWUsRUFBRTt3QkFDZixhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsZUFBZTtxQkFDaEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBjcmVhdGVDdXN0b21FbGVtZW50IH0gZnJvbSAnQGFuZ3VsYXIvZWxlbWVudHMnO1xuXG5pbXBvcnQgeyBLZWJhYlBpcGUgfSBmcm9tICcuL2tlYmFiLnBpcGUnO1xuaW1wb3J0IHsgTm9kZUNvbXBvbmVudCB9IGZyb20gJy4vbm9kZS9ub2RlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb2NrZXRDb21wb25lbnQgfSBmcm9tICcuL3NvY2tldC9zb2NrZXQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRyb2xEaXJlY3RpdmUgfSBmcm9tICcuL2NvbnRyb2wuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNvY2tldERpcmVjdGl2ZSB9IGZyb20gJy4vc29ja2V0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDdXN0b21Db21wb25lbnQgfSBmcm9tICcuL2N1c3RvbS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOb2RlQ29tcG9uZW50LFxuICAgIFNvY2tldENvbXBvbmVudCxcbiAgICBDdXN0b21Db21wb25lbnQsXG4gICAgQ29udHJvbERpcmVjdGl2ZSxcbiAgICBTb2NrZXREaXJlY3RpdmUsXG4gICAgS2ViYWJQaXBlLFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEtlYmFiUGlwZSxcbiAgICBDb250cm9sRGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOb2RlQ29tcG9uZW50LFxuICAgIEN1c3RvbUNvbXBvbmVudCxcbiAgICBTb2NrZXRDb21wb25lbnQsXG4gICAgQ29udHJvbERpcmVjdGl2ZSxcbiAgICBTb2NrZXREaXJlY3RpdmUsXG4gICAgS2ViYWJQaXBlXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIE5vZGVDb21wb25lbnQsXG4gICAgU29ja2V0Q29tcG9uZW50LFxuICAgIEN1c3RvbUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFJldGVNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihpbmplY3RvcjogSW5qZWN0b3IpIHsgLy8gU3RhdGljSW5qZWN0b3JFcnJvciBkdWUgdG8gJ25wbSBsaW5rJ1xuICAgIGNvbnN0IEN1c3RvbUVsZW1lbnQgPSBjcmVhdGVDdXN0b21FbGVtZW50KEN1c3RvbUNvbXBvbmVudCwgeyBpbmplY3RvciB9KTtcbiAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCgncmV0ZS1lbGVtZW50JykpIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgncmV0ZS1lbGVtZW50JywgQ3VzdG9tRWxlbWVudCk7XG4gIH1cbn1cbiJdfQ==