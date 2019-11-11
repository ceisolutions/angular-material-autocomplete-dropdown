import { TestBed } from '@angular/core/testing';

import { AutocompleteDropdownService } from './autocomplete-dropdown.service';

describe('AutocompleteDropdownService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutocompleteDropdownService = TestBed.get(AutocompleteDropdownService);
    expect(service).toBeTruthy();
  });
});
