  const categoriesTabs = document.querySelector('.categories-tabs');
	const tabsBtn = categoriesTabs?.querySelectorAll('.tabs__btn');
	const tabsContent = categoriesTabs?.querySelectorAll('.tabs__content');

	if (categoriesTabs) {
		categoriesTabs.addEventListener('click', (e) => {
			if (e.target.classList.contains('tabs__btn')) {
				const tabsPath = e.target.dataset.tabsPath;
				tabsBtn.forEach(el => {el.classList.remove('tabs__btn--active')});
				document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn--active');
				tabsHandler(tabsPath);

        if(tabsPath === 'all') {
          tabsContent.forEach(el => {el.classList.add('tabs__content--active')});
        }
			}


		});
	}

	const tabsHandler = (path) => {
		tabsContent.forEach(el => {el.classList.remove('tabs__content--active')});
		document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
	};
