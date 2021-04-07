let rendered = new Set([]);

function main() {
    tippy('#nanplanar', {
        content: "<image src=\"resources/images/torus-forever.gif\" style=\"width:256px;\">",
        allowHTML: true,
        placement: "bottom",
    },
    );
    tippy('.planar', {
        content: 'A graph $G$ which can be drawn on a plane without any intersecting edges',
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
        content: 'A graph $G$ which can be drawn on a torus without any intersecting edges',
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
}