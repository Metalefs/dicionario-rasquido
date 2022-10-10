
import { describe, expect, test } from '@jest/globals';
import * as fs from 'fs';
import { launch } from 'src/shared/browser';
import { Navigator } from 'src/shared/navigator';

describe('Scrape', () => {
  test('search amizade', async () => {
    const query = 'amizade';
    const browser = await launch();
    const navigator = new Navigator(browser as any)
    const result = await navigator.searchDicioInformal(query);

    fs.writeFileSync(
      `./src/test/results/scrape/result.json`,
      JSON.stringify(result)
    );

    expect(result).toBeTruthy();
    browser.close()

  }, 20000);

});