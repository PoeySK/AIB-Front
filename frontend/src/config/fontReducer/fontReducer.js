export const CUR_FONT = 'CUR_FONT';
export const setCurFont = (fontName, fontSize) => ({ type: CUR_FONT, fontName, fontSize });

const initialState = {
    fontName: "Arial",
    fontSize: 24
};

export const FontReducer = (state = initialState, action) => {
    switch (action.type) {
        case CUR_FONT:
            return {
                ...state,
                fontName: action.fontName,
                fontSize: action.fontSize
            };
        default:
            return state;
    }
};
