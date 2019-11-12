/**
 * Loads all the projects, according to the filters selected.
 */
const projectCard = data => {
  // <span class="badge badge-secondary">New</span>
  //let badges = '';
  return `
    <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div class="card">
        <img
          src=${data.img}
          class="card-img-top"
          alt=${data.name}
        />
        <div class="card-body">
          <h5 class="card-title">${data.name}&nbsp;<span class="badge badge-dark">${data.tags[0]}</span>&nbsp;&nbsp;<span class="badge badge-dark">${data.tags[1]}</span></h5>
          <p class="card-text">
            ${data.desc}
          </p>
          <a href="${data.btnUrl}" class="btn btn-primary">Details</a>
        </div>
      </div>
    </div>`;
};

function updateFiltersView(elements, filters) {
  elements.toggleClass(function() {
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

(function($) {
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
    const activeFilters = Object.keys(filters).filter(k => filters[k]);
    let flag = 0;
    for (tag in tags) {
      if (filter[tag]) {
        flag += 1;
      }
    }
    return flag === activeFilters.length;
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
    if (property === 'all') {
      filters.all = true;
      filters.personal = false;
      filters.professional = false;
      filters.university = false;
      filters.wip = false;
      updateFiltersView(filtersElem, filters);
      return;
    } else {
      filters.all = false;
    }
    filters[property] = !filters[property];
    updateFiltersView(filtersElem, filters);
  });
})(jQuery);
