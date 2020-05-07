//Types
import {PROJECT_ACTION_TYPES} from "./reducers/project/types";
import {AUTH_ACTION_TYPES} from "./reducers/auth/types";

// Root reducer:
import {rootReducer} from "./reducers/root-reducer";

// App state and actions:
export type AppState = ReturnType<typeof rootReducer>;
export type AppActions = PROJECT_ACTION_TYPES | AUTH_ACTION_TYPES

