import { AfterViewInit, ElementRef, EventEmitter, OnChanges, OnInit, Renderer2 } from '@angular/core';
export interface Coord {
    x: number;
    y: number;
}
export declare type ValidZoomMode = 'hover' | 'toggle' | 'click' | 'hover-freeze' | 'hover-click' | 'tri-click';
export declare class NgxImageZoomComponent implements OnInit, OnChanges, AfterViewInit {
    private renderer;
    private static readonly validZoomModes;
    zoomContainer: ElementRef;
    imageThumbnail: ElementRef;
    fullSizeImage: ElementRef;
    onZoomScroll: EventEmitter<number>;
    onZoomPosition: EventEmitter<Coord>;
    onZoomStateChange: EventEmitter<{ state: any }>;
    display: string;
    fullImageTop: number;
    fullImageLeft: number;
    magnifiedWidth: number;
    magnifiedHeight: number;
    lensTop: number;
    lensLeft: number;
    enableLens: boolean;
    lensBorderRadius: number;
    thumbImage: string;
    fullImage: string;
    thumbWidth: number;
    thumbHeight: number;
    fullWidth: number;
    fullHeight: number;
    lensWidth: number;
    lensHeight: number;
    private zoomMode;
    private magnification;
    private enableScrollZoom;
    private scrollStepSize;
    private circularLens;
    private scrollParentSelector;
    private baseRatio;
    private minZoomRatio;
    private maxZoomRatio;
    private xRatio;
    private yRatio;
    private offsetLeft;
    private offsetTop;
    private zoomingEnabled;
    private zoomFrozen;
    private isReady;
    private thumbImageLoaded;
    private fullImageLoaded;
    private latestMouseLeft;
    private latestMouseTop;
    private scrollParent;
    constructor(renderer: Renderer2);
    setThumbImage: string;
    setFullImage: string;
    setZoomMode: ValidZoomMode;
    setMagnification: number;
    setMinZoomRatio: number;
    setMaxZoomRatio: number;
    setScrollStepSize: number;
    setEnableLens: boolean;
    setLensWidth: number;
    setLensHeight: number;
    setCircularLens: boolean;
    setEnableScrollZoom: boolean;
    setScrollParentSelector: string;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    /**
     * Template helper methods
     */
    onThumbImageLoaded(): void;
    onFullImageLoaded(): void;
    private checkImagesLoaded();
    /**
     * Zoom position setters
     */
    private setZoomPosition(left, top);
    /**
     * Mouse wheel event
     */
    private onMouseWheel(event);
    /**
     * Hover mode
     */
    private hoverMouseEnter(event);
    private hoverMouseLeave();
    private hoverMouseMove(event);
    /**
     * Toggle mode
     */
    private toggleClick(event);
    /**
     * Click mode
     */
    private clickStarter(event);
    private clickMouseLeave();
    private clickMouseMove(event);
    /**
     * Hover freeze mode
     */
    private hoverFreezeMouseEnter(event);
    private hoverFreezeMouseLeave();
    private hoverFreezeMouseMove(event);
    private hoverFreezeClick(event);
    /**
     * Hover click mode
     */
    private hoverClickMouseEnter(event);
    private hoverClickMouseLeave(event);
    private hoverClickMouseMove(event);
    private hoverClickMouseClick(event);
    /**
     * Tri-click mode
     */
    private triClickMouseEnter(event);
    private triClickMouseLeave();
    private triClickMouseMove(event);
    private toggleTriClick(event);
    /**
     * Private helper methods
     */
    private zoomOn(event);
    private zoomOff();
    private calculateZoomPosition(event);
    private calculateImageAndLensPosition();
    private calculateRatioAndOffset();
    private calculateRatio();
}
