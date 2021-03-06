SHELL := /bin/bash
VERSION := $(shell cat install.rdf|grep '<em:version>'|cut -d\> -f2|cut -d\< -f1)

make-xpi:
	zip -r ../torbirdy-$(VERSION).xpi *

git-tag:
	git tag -u 0xD81D840E -s $(VERSION)

git-push:
	git push --tags
	git push

sign-release:
	gpg -u 0xD81D840E -abs ../torbirdy-${VERSION}.xpi$
	sha1sum ../torbirdy-${VERSION}.xpi$

push-release:
	chmod 664 ../torbirdy-${VERSION}.xpi*$
	scp ../torbirdy-${VERSION}.xpi* vescum:/srv/www-master.torproject.org/htdocs/dist/torbirdy/$
	scp ../torbirdy-${VERSION}.xpi vescum:/srv/www-master.torproject.org/htdocs/dist/torbirdy/torbirdy-current.xpi$
	scp ../torbirdy-${VERSION}.xpi.asc vescum:/srv/www-master.torproject.org/htdocs/dist/torbirdy/torbirdy-current.xpi.asc$
	
release: sign-release push-release
	
