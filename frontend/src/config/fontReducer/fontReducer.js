export const CUR_FONT = 'CUR_FONT';
export const setCurFont = fontName => ({ type: CUR_FONT, fontName });

const initialState = {
    fontName: "Arial"
};

export const FontReducer = (state = initialState, action) => {
    switch (action.type) {
        case CUR_FONT:
            return {
                ...state,
                fontName: action.fontName
            };
        default:
            return state;
    }
};
