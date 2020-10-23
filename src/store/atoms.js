import { atom } from 'recoil';

const quotesListState = atom({
    key: 'quotesList',
    default: []
});

const loadedPagesState = atom({
    key: 'loadedPages',
    default: []
})

export {
    quotesListState,
    loadedPagesState
}