function renderPage(data) {
    document.body.className = data.bodyClass || 'body';
    
    document.querySelector('.page__title').textContent = data.title;
    document.querySelector('.page__subtitle').textContent = data.subtitle;
    
    const sectionsContainer = document.querySelector('.sections-container');
    sectionsContainer.innerHTML = '';
    data.sections.forEach(section => {
        const sectionDiv = document.createElement('section');
        sectionDiv.className = 'section';
        if (section.reverse) sectionDiv.classList.add('section_reverse');
        if (section.darkSection) sectionDiv.classList.add('section_dark');
        const textbox = document.createElement('div');
        textbox.className = 'section__textbox';
        textbox.innerHTML = `
            <h3 class="section__header ${data.theme === 'dark' ? 'section__header_dark' : ''}" id="${section.header.slice(0,2)}">${section.header}</h3>
            <h4 class="section__subheader">${section.subheader}</h4>
            ${section.texts.map(text => `<p class="section__text">${text}</p>`).join('')}
        `;
        const imgbox = document.createElement('div');
        imgbox.className = 'section__imgbox';
        imgbox.innerHTML = `
            ${section.images.map(img => `<img src="${img}" class="section__image" alt="${section.subheader}" />`).join('')}
            <p class="section__imgtext ${data.theme === 'dark' ? 'section__imgtext_dark' : ''}">${section.imageCaption}</p>
        `;
        sectionDiv.appendChild(textbox);
        sectionDiv.appendChild(imgbox);
        sectionsContainer.appendChild(sectionDiv);
    });
    
    const cardsContainer = document.querySelector('.cards');
    cardsContainer.innerHTML = '';
    data.cards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.innerHTML = `
            <img src="${card.icon}" class="card__image" alt="${card.name}" />
            <a href="${card.anchor}" class="card__name ${data.theme === 'dark' ? 'card__name_dark' : ''}">${card.name}</a>
        `;
        cardsContainer.appendChild(cardDiv);
    });
    
    const navContainer = document.querySelector('.navigation')
    navContainer.innerHTML = `
        <a href="${data.prevPage.url}" class="navigation__link ${data.theme === 'dark' ? 'navigation__link_dark' : ''}">${data.prevPage.name}</a>
        <a href="${data.nextPage.url}" class="navigation__link ${data.theme === 'dark' ? 'navigation__link_dark' : ''}">${data.nextPage.name}</a>
    `;
    
    applyThemeToHeaderFooter(data.theme);
}