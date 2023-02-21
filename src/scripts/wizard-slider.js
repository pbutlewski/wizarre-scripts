export function wizardSlider() {
  const wizardData = initData('.wizard-source');
  const template = initTemplate();
  let index = 0;
  swapWizard(template, wizardData, index);
  const arrowLeft = document.querySelector('.wizard-slider-left');
  const arrowRight = document.querySelector('.wizard-slider-right');
  arrowLeft.addEventListener('click', () => {
    index -= 1;
    if (index < 0) index = wizardData.length - 1;
    swapWizard(template, wizardData, index);
  });
  arrowRight.addEventListener('click', () => {
    index += 1;
    index = index % wizardData.length;
    swapWizard(template, wizardData, index);
  });
  const statsCards = [...document.querySelectorAll('.text-box.is--stats-card')];
  for (const card of statsCards) {
    card.addEventListener('click', () => cardClick(card));
  }
  const firstCard = document.querySelector('#emblem-card');
  cardClick(firstCard);
}
function cardClick(currentCard) {
  const isActive = currentCard.classList.contains('is--active');
  const itemImg = document.getElementById(currentCard.dataset.item);
  if (!isActive) {
    removeActive('.wizard-overlay');
    removeActive('.text-box.is--stats-card');
    currentCard.classList.add('is--active');
    itemImg.classList.add('is--active');
  }
}
function removeActive(selector) {
  const activeItems = document.querySelectorAll(`${selector}.is--active`);
  if (activeItems)
    [...activeItems].map((item) => item.classList.remove('is--active'));
}
function swapWizard(template, data, index) {
  removeActive('.text-box.is--stats-card');
  removeActive('.wizard-overlay');
  const wizard = data[index];
  template.images.replaceChildren(...wizard.images);
  replaceItem(template.item.emblem, wizard.item.emblem);
  replaceItem(template.item.hat, wizard.item.hat);
  replaceItem(template.item.robe, wizard.item.robe);
  replaceItem(template.item.staff, wizard.item.staff);
  replaceSpell(template.spell.teamBuff, wizard.spell.teamBuff);
  replaceSpell(template.spell.offensiveSpell, wizard.spell.offensiveSpell);
  replaceSpell(template.spell.ultimateSpell, wizard.spell.ultimateSpell);
  replaceSpell(template.spell.defensiveSpell, wizard.spell.defensiveSpell);
}

function replaceItem(template, data) {
  template.icon.replaceChildren(data.icon);
  template.element.replaceChildren(data.element);
}

function replaceSpell(template, data) {
  template.icon.replaceChildren(data.icon);
  template.name.replaceChildren(data.name);
  template.desc.replaceChildren(data.desc);
}

function initData(selector) {
  const wizardSource = [...document.querySelectorAll(selector)];
  const wizardData = wizardSource.map((wizard) => {
    return {
      images: [...wizard.content.querySelectorAll('.wizard-img,.wizard-overlay')],
      item: {
        emblem: {
          icon: wizard.content.querySelector('.stats-emblem > .stats-icon'),
          element: wizard.content.querySelector(
            '.stats-emblem > .stats-element'
          ),
        },
        hat: {
          icon: wizard.content.querySelector('.stats-hat > .stats-icon'),
          element: wizard.content.querySelector('.stats-hat > .stats-element'),
        },
        robe: {
          icon: wizard.content.querySelector('.stats-robe > .stats-icon'),
          element: wizard.content.querySelector('.stats-robe > .stats-element'),
        },
        staff: {
          icon: wizard.content.querySelector('.stats-staff > .stats-icon'),
          element: wizard.content.querySelector(
            '.stats-staff > .stats-element'
          ),
        },
      },
      spell: {
        teamBuff: {
          icon: wizard.content.querySelector('.team-buff > .spell-icon'),
          name: wizard.content.querySelector('.team-buff > .spell-name'),
          desc: wizard.content.querySelector('.team-buff > .spell-desc'),
        },
        offensiveSpell: {
          icon: wizard.content.querySelector('.offensive-spell > .spell-icon'),
          name: wizard.content.querySelector('.offensive-spell > .spell-name'),
          desc: wizard.content.querySelector('.offensive-spell > .spell-desc'),
        },
        defensiveSpell: {
          icon: wizard.content.querySelector('.defensive-spell > .spell-icon'),
          name: wizard.content.querySelector('.defensive-spell > .spell-name'),
          desc: wizard.content.querySelector('.defensive-spell > .spell-desc'),
        },
        ultimateSpell: {
          icon: wizard.content.querySelector('.ultimate-spell > .spell-icon'),
          name: wizard.content.querySelector('.ultimate-spell > .spell-name'),
          desc: wizard.content.querySelector('.ultimate-spell > .spell-desc'),
        },
      },
    };
  });
  return wizardData;
}
function initTemplate() {
  const wizardSection = document.querySelector('.wizard-slider');
  const statsSection = document.querySelector('.stats-section');
  return {
    images: wizardSection,
    item: {
      emblem: {
        icon: statsSection.querySelector(
          '#emblem-card .stats-column.item .stats-image'
        ),
        element: statsSection.querySelector(
          '#emblem-card .stats-column.item .stats-data'
        ),
      },
      hat: {
        icon: statsSection.querySelector(
          '#hat-card .stats-column.item .stats-image'
        ),
        element: statsSection.querySelector(
          '#hat-card .stats-column.item .stats-data'
        ),
      },
      robe: {
        icon: statsSection.querySelector(
          '#robe-card .stats-column.item .stats-image'
        ),
        element: statsSection.querySelector(
          '#robe-card .stats-column.item .stats-data'
        ),
      },
      staff: {
        icon: statsSection.querySelector(
          '#staff-card .stats-column.item .stats-image'
        ),
        element: statsSection.querySelector(
          '#staff-card .stats-column.item .stats-data'
        ),
      },
    },
    spell: {
      teamBuff: {
        icon: statsSection.querySelector(
          '#emblem-card .stats-column.spell .stats-image'
        ),
        name: statsSection.querySelector(
          '#emblem-card .stats-column.spell .stats-data'
        ),
        desc: statsSection.querySelector(
          '#emblem-card .stats-column.spell .stats-description'
        ),
      },
      offensiveSpell: {
        icon: statsSection.querySelector(
          '#hat-card .stats-column.spell .stats-image'
        ),
        name: statsSection.querySelector(
          '#hat-card .stats-column.spell .stats-data'
        ),
        desc: statsSection.querySelector(
          '#hat-card .stats-column.spell .stats-description'
        ),
      },
      ultimateSpell: {
        icon: statsSection.querySelector(
          '#robe-card .stats-column.spell .stats-image'
        ),
        name: statsSection.querySelector(
          '#robe-card .stats-column.spell .stats-data'
        ),
        desc: statsSection.querySelector(
          '#robe-card .stats-column.spell .stats-description'
        ),
      },
      defensiveSpell: {
        icon: statsSection.querySelector(
          '#staff-card .stats-column.spell .stats-image'
        ),
        name: statsSection.querySelector(
          '#staff-card .stats-column.spell .stats-data'
        ),
        desc: statsSection.querySelector(
          '#staff-card .stats-column.spell .stats-description'
        ),
      },
    },
  };
}
