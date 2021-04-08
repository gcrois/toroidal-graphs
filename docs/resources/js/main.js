let rendered = new Set([]);

function main() {
    tippy('#nanplanar', {
        content: "<image src=\"resources/images/torus-forever.gif\" style=\"width:256px;\">",
        allowHTML: true,
        placement: "bottom",
    },
    );
    tippy('.planar', {
        content: 'A graph $G$ is planar if it can be drawn on a plane without any intersecting edges',
        allowHTML: true,
        placement: "bottom",
        onShown(instance) {
            if (!rendered.has(instance.id)) {
                MathJax.typeset($("#" + instance.popper.id));
                rendered.add(instance.id);
            }
        },
    },
    );
    tippy('.tor', {
        content: 'A graph $G$ is toroidal if it can be drawn on a torus without any intersecting edges',
        allowHTML: true,
        placement: "bottom",
        onShown(instance) {
            if (!rendered.has(instance.id)) {
                MathJax.typeset($("#" + instance.popper.id));
                rendered.add(instance.id);
            }
        },
    },
    );
    tippy('.kurT', {
        content: 'A graph $G$ is planar <i>if and only if</i> it does not contain any subgraphs that are a subdivision of $K_5$ or $K_{3,3}$',
        allowHTML: true,
        placement: "bottom",
        onShown(instance) {
            if (!rendered.has(instance.id)) {
                MathJax.typeset($("#" + instance.popper.id));
                rendered.add(instance.id);
            }
        },
    },
    );
    tippy('.k5', {
        content: '<image src="resources/images/graphs/k5.svg" style="width:256px;">',
        allowHTML: true,
        placement: "bottom",
    },
    );
    tippy('.k33', {
        content: '<image src="resources/images/graphs/k33.svg" style="width:256px;">',
        allowHTML: true,
        placement: "bottom",
    },
    );
    tippy('.bridge', {
        content: 'An edge $e$ is a bridge <i>if and only if</i> $G-e$ increases the number of components in the graph. If $G$ is connected, $G-e$ must be disconnected.',
        allowHTML: true,
        placement: "bottom",
        onShown(instance) {
            if (!rendered.has(instance.id)) {
                MathJax.typeset($("#" + instance.popper.id));
                rendered.add(instance.id);
            }
        },
    },
    );
    tippy('.region', {
        content: 'An area of an embedding which is bounded by edges and cannot be subdivided.',
        allowHTML: true,
        placement: "bottom",
    },
    );
    tippy('.distinct', {
        content: 'Two embeddings are distinct if they cannot be trivially transformed into each other. For example, there are 231 unlabelled distinct embeddings for $K_5$ onto a torus.',
        allowHTML: true,
        placement: "bottom",
        onShown(instance) {
            if (!rendered.has(instance.id)) {
                MathJax.typeset($("#" + instance.popper.id));
                rendered.add(instance.id);
            }
        },
    },
    );
}
