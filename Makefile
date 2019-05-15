SHELL=/bin/bash

.PHONY: deployment
deployment:
	npm run build
	rm -rf ../benjih.master/static
	cd build && mv * ../../benjih.master/.
	cd ../benjih.master/ && \
		git add . && \
		git commit -m "deployment" && \
		git push origin master