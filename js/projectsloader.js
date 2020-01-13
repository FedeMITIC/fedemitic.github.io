/**
 * Loads all the projects, according to the filters selected.
 */
const projectCard = data => {
  // <span class="badge badge-dark">New</span>
  // At least one tag is always present
  let badges = `<span class="badge badge-dark">${data.tags[0]}</span>`;
  if (data.tags.length > 1) {
    // Skip the first ones that was already inserted
    for (let i = 1; i < data.tags.length; i += 1) {
      badges += `&nbsp;&nbsp;<span class="badge badge-dark">${data.tags[i]}</span>`;
    }
  }
  return `
    <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div class="card">
        <img
          src=${data.img}
          class="card-img-top"
          alt=${data.name}
        />
        <div class="card-body">
          <h5 class="card-title">${data.name} (${data.date})<br />${badges}</h5>
          <p class="card-text">
            ${data.desc}
          </p>
          <button href="${data.btnUrl}" class="btn btn-primary" name="btn-details">Details</button>
        </div>
      </div>
    </div>`;
};

function updateFiltersView(elements, filters) {
  elements.toggleClass(function () {
    const key = $(this)[0].dataset['filterName'];
    const classList = $(this)[0].classList;
    if (filters[key]) {
      classList.add('active-filter');
      return classList;
    } else {
      classList.remove('active-filter');
      return classList;
    }
  });
}

function setAllFilter(filters) {
  filters.all = true;
  filters.personal = false;
  filters.professional = false;
  filters.university = false;
  filters.wip = false;
}

(function ($) {
  'use strict';
  const filters = {
    all: true,
    personal: false,
    professional: false,
    university: false,
    wip: false,
  };
  let appendString = '';
  PROJECTS.filter(project => {
    // If the 'all' filter is active, don't perform any filtering
    if (filters.all) {
      return true;
    }
    const tags = project.tags;
    // If there's at least one match, include the project
    for (tag in tags) {
      if (filter[tag]) {
        return true;
      }
    }
    return false;
  }).forEach(project => {
    appendString += projectCard(project);
  });
  $('#project-elements').append(appendString);
  /**
   * Event handlers
   */
  const filtersElem = $('.filter');
  filtersElem.click(event => {
    event.preventDefault();
    const property = event.currentTarget.dataset['filterName'];
    // If the "all" filter is selected, or all the other filters are selected, set the "all" filter to true and the others to false.
    if (property === 'all') {
      setAllFilter(filters);
      updateFiltersView(filtersElem, filters);
      return;
    } else {
      filters.all = false;
    }
    filters[property] = !filters[property];
    if (filters.personal && filters.professional && filters.university && filters.wip) {
      setAllFilter(filters);
    }
    updateFiltersView(filtersElem, filters);
  });
  const btns = $('button[name="btn-details"]');
  for (let btn of btns) {
    const href = btn.attributes.href.value;
    if (href === '#') {
      btn.setAttribute('disabled', 'true')
    } else {
      btn.removeAttribute('disabled')
    }
  }
})(jQuery);
