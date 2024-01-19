import { createIntegration, createComponent } from '@gitbook/runtime';

const ScribeHowComponent = createComponent<{
    url?: string;
}>({
    componentId: 'scribe-how',

    async action(element, action) {
        switch (action.action) {
            case '@link.unfurl': {
                // The pasted URL
                const { url } = action;

                return {
                    props: {
                        url,
                    },
                };
            }
        }

        return element;
    },

    async render(element, context) {
        const { url } = element.props;

        return (
            <block>
                <text>Hello</text>
                <webframe
                    source={{
                        url,
                    }}
                    aspectRatio={16 / 9}
                />
            </block>
        );
    },
});

export default createIntegration({
    components: [ScribeHowComponent],
});
