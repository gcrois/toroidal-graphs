function main() {
    tippy('#planar', {
        content: "<image src=\"resources/images/torus-forever.gif\" style=\"width:256px;\">",
        allowHTML: true,
        placement: "bottom",
    },
    );
    tippy('.kurT', {
        content: 'A graph $G$ is planar if and only if it does not contain any subgraphs that are a subdivision of $K_5$ or $K_{3,3}$',
        allowHTML: true,
        placement: "bottom",
        onShown(instance) {
            MathJax.typeset()
        }
    },
    );
}