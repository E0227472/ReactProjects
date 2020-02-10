import {gettingLetterMatchCount} from './index';

describe('getLetterMatchCount', () => {
    const secretWord = 'party';

    test('returns correct count when there are no matching letters', () => {
        const letterMatchCount = gettingLetterMatchCount('bones', secretWord);

        expect(letterMatchCount).toBe(0);
    })

     test('returns correct when there are 3 matching letters', () => {
            const letterMatchCount = gettingLetterMatchCount('train', secretWord);

            expect(letterMatchCount).toBe(3);
    })

      test('returns correct count when there are duplicate letters in the group', () => {
              const letterMatchCount = gettingLetterMatchCount('parka', secretWord);

              expect(letterMatchCount).toBe(3);
    })    
})