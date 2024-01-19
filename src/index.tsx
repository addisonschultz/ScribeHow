import { createIntegration, createComponent } from '@gitbook/runtime';

const UnfurlExample = createComponent<{
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
    components: [UnfurlExample],
});
