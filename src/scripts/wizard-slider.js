export function wizardSlider() {
  const wizardData = initData('.wizard-source');
  const desktop = initTemplate();
  const mobile = mobileTemplate();
  let index = 0;
  swapWizard(desktop, wizardData, index, false);
  swapWizard(mobile, wizardData, index, true);
  const arrowLeft = document.querySelector('.wizard-slider-left');
  const arrowRight = document.querySelector('.wizard-slider-right');
  arrowLeft.addEventListener('click', () => {
    index -= 1;
    if (index < 0) index = wizardData.length - 1;
    swapWizard(desktop, wizardData, index, false);
    swapWizard(mobile, wizardData, index, true);

  });
  arrowRight.addEventListener('click', () => {
    index += 1;
    index = index % wizardData.length;
    swapWizard(desktop, wizardData, index, false);
    swapWizard(mobile, wizardData, index, true);
  });
  const statsCards = [...document.querySelectorAll('.text-box.is--stats-card')];
  for (const card of statsCards) {
    card.addEventListener('click', () => cardClick(card));
  }
  const emblemCard = document.querySelector('#emblem-card');
  cardClick(emblemCard);
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
function swapWizard(template, data, index, mobile) {

  const wizard = data[index];
  if(!mobile){ 
    removeActive('.text-box.is--stats-card');
    removeActive('.wizard-overlay');
    template.images.replaceChildren(...wizard.images);
  }
  
  
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
  template.icon.replaceChildren(data.icon.cloneNode(true));
  template.element.replaceChildren(data.element.cloneNode(true));
}

function replaceSpell(template, data) {
  template.icon.replaceChildren(data.icon.cloneNode(true));
  template.name.replaceChildren(data.name.cloneNode(true));
  template.desc.replaceChildren(data.desc.cloneNode(true));
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


function mobileTemplate() {
  const statsSection = document.querySelector('.is--mobile-stats-card');
  return {
    item: {
      emblem: {
        icon: statsSection.querySelector(
          '#mobile-emblem .stats-image'
        ),
        element: statsSection.querySelector(
          '#mobile-emblem .stats-data'
        ),
      },
      hat: {
        icon: statsSection.querySelector(
          '#mobile-hat  .stats-image'
        ),
        element: statsSection.querySelector(
          '#mobile-hat  .stats-data'
        ),
      },
      robe: {
        icon: statsSection.querySelector(
          '#mobile-robe .stats-image'
        ),
        element: statsSection.querySelector(
          '#mobile-robe .stats-data'
        ),
      },
      staff: {
        icon: statsSection.querySelector(
          '#mobile-staff .stats-image'
        ),
        element: statsSection.querySelector(
          '#mobile-staff .stats-data'
        ),
      },
    },
    spell: {
      teamBuff: {
        icon: statsSection.querySelector(
          '#mobile-team-buff .stats-image'
        ),
        name: statsSection.querySelector(
          '#mobile-team-buff .stats-data'
        ),
        desc: statsSection.querySelector(
          '#mobile-team-buff .stats-description'
        ),
      },
      offensiveSpell: {
        icon: statsSection.querySelector(
          '#mobile-offensive .stats-image'
        ),
        name: statsSection.querySelector(
          '#mobile-offensive .stats-data'
        ),
        desc: statsSection.querySelector(
          '#mobile-offensive .stats-description'
        ),
      },
      ultimateSpell: {
        icon: statsSection.querySelector(
          '#mobile-ultimate .stats-image'
        ),
        name: statsSection.querySelector(
          '#mobile-ultimate .stats-data'
        ),
        desc: statsSection.querySelector(
          '#mobile-ultimate .stats-description'
        ),
      },
      defensiveSpell: {
        icon: statsSection.querySelector(
          '#mobile-defensive .stats-image'
        ),
        name: statsSection.querySelector(
          '#mobile-defensive .stats-data'
        ),
        desc: statsSection.querySelector(
          '#mobile-defensive .stats-description'
        ),
      },
    },
  };
}
