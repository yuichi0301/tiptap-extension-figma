import { Node } from '@tiptap/core';

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        figma: {
            setFigma: (options: {
                src: string;
            }) => ReturnType;
            unsetFigma: () => ReturnType;
        };
    }
}
declare const Figma: Node<any, any>;

export { Figma };
