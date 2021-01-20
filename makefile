index.html: index.md styles/styles.css
	pandoc -s index.md -o index.html \
		--include-in-header=fonts.html \
		--highlight-style=monochrome \
		-f markdown+implicit_figures \
		--css=styles/styles.css
