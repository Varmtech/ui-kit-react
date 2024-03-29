export declare const CREATE_CHANNEL = "CREATE_CHANNEL";
export declare const GET_CHANNELS = "GET_CHANNELS";
export declare const SEARCH_CHANNELS = "SEARCH_CHANNELS";
export declare const SET_SEARCHED_CHANNELS = "SET_SEARCHED_CHANNELS";
export declare const SET_SEARCHED_CHANNELS_FOR_FORWARD = "SET_SEARCHED_CHANNELS_FOR_FORWARD";
export declare const SET_CLOSE_SEARCH_CHANNELS = "SET_CLOSE_SEARCH_CHANNELS";
export declare const GET_CHANNELS_FOR_FORWARD = "GET_CHANNELS_FOR_FORWARD";
export declare const SEARCH_CHANNELS_FOR_FORWARD = "SEARCH_CHANNELS_FOR_FORWARD";
export declare const LOAD_MORE_CHANNEL = "LOAD_MORE_CHANNEL";
export declare const LOAD_MORE_CHANNELS_FOR_FORWARD = "LOAD_MORE_CHANNELS_FOR_FORWARD";
export declare const ADD_CHANNEL = "ADD_CHANNEL";
export declare const ADD_CHANNELS = "ADD_CHANNELS";
export declare const ADD_CHANNELS_FOR_FORWARD = "ADD_CHANNELS_FOR_FORWARD";
export declare const SET_CHANNELS = "SET_CHANNELS";
export declare const SET_CHANNELS_FOR_FORWARD = "SET_CHANNELS_FOR_FORWARD";
export declare const DELETE_CHANNEL = "DELETE_CHANNEL";
export declare const BLOCK_CHANNEL = "BLOCK_CHANNEL";
export declare const SET_CHANNELS_LOADING_STATE = "SET_CHANNELS_LOADING_STATE";
export declare const CHANNELS_HAS_NEXT = "CHANNELS_HAS_NEXT";
export declare const SWITCH_CHANNEL = "SWITCH_CHANNEL";
export declare const SET_ACTIVE_CHANNEL = "SET_ACTIVE_CHANNEL";
export declare const UPDATE_CHANNEL = "UPDATE_CHANNEL";
export declare const UPDATE_CHANNEL_DATA = "UPDATE_CHANNEL_DATA";
export declare const UPDATE_SEARCHED_CHANNEL_DATA = "UPDATE_SEARCHED_CHANNEL_DATA";
export declare const REMOVE_CHANNEL = "REMOVE_CHANNEL";
export declare const REMOVE_CHANNEL_CACHES = "REMOVE_CHANNEL_CACHES";
export declare const UPDATE_CHANNEL_LAST_MESSAGE = "UPDATE_CHANNEL_LAST_MESSAGE";
export declare const UPDATE_CHANNEL_LAST_MESSAGE_STATUS = "UPDATE_CHANNEL_LAST_MESSAGE_STATUS";
export declare const MARK_MESSAGES_AS_READ = "MARK_MESSAGES_AS_READ";
export declare const MARK_MESSAGES_AS_DELIVERED = "MARK_MESSAGES_AS_DELIVERED";
export declare const SEND_TYPING = "SEND_TYPING";
export declare const SWITCH_TYPING_INDICATOR = "SWITCH_TYPING_INDICATOR";
export declare const JOIN_TO_CHANNEL = "JOIN_TO_CHANNEL";
export declare const SET_IS_DRAGGING = "SET_IS_DRAGGING";
export declare const SET_DRAGGED_ATTACHMENTS = "SET_DRAGGED_ATTACHMENTS";
export declare const WATCH_FOR_EVENTS = "WATCH_FOR_EVENTS";
export declare const SET_CHANNEL_TO_REMOVE = "SET_CHANNEL_TO_REMOVE";
export declare const SET_CHANNEL_TO_ADD = "SET_CHANNEL_TO_ADD";
export declare const SET_ADDED_TO_CHANNEL = "SET_ADDED_TO_CHANNEL";
export declare const SET_CHANNEL_TO_HIDE = "SET_CHANNEL_TO_HIDE";
export declare const SET_CHANNEL_TO_UNHIDE = "SET_CHANNEL_TO_UNHIDE";
export declare const TURN_OFF_NOTIFICATION = "TURN_OFF_NOTIFICATION";
export declare const TURN_ON_NOTIFICATION = "TURN_ON_NOTIFICATION";
export declare const MARK_CHANNEL_AS_READ = "MARK_CHANNEL_AS_READ";
export declare const MARK_CHANNEL_AS_UNREAD = "MARK_CHANNEL_AS_UNREAD";
export declare const CHANNEL_INFO_OPEN_CLOSE = "CHANNEL_INFO_OPEN_CLOSE";
export declare const LEAVE_CHANNEL = "LEAVE_CHANNEL";
export declare const TOGGLE_EDIT_CHANNEL = "TOGGLE_EDIT_CHANNEL";
export declare const UPDATE_USER_STATUS_ON_CHANNEL = "UPDATE_USER_STATUS_ON_CHANNEL";
export declare const SET_CHANNEL_LIST_WIDTH = "SET_CHANNEL_LIST_WIDTH";
export declare const CLEAR_HISTORY = "CLEAR_HISTORY";
export declare const DELETE_ALL_MESSAGES = "DELETE_ALL_MESSAGES";
export declare const DESTROY_SESSION = "DESTROY_SESSION";
export declare const SET_TAB_IS_ACTIVE = "SET_TAB_IS_ACTIVE";
export declare const SET_HIDE_CHANNEL_LIST = "SET_HIDE_CHANNEL_LIST";
export declare const DRAFT_IS_REMOVED = "DRAFT_IS_REMOVED";
export declare const CHANNEL_EVENT_TYPES: {
    CREATE: string;
    JOIN: string;
    LEAVE: string;
    BLOCK: string;
    UNBLOCK: string;
    ADD_MEMBERS: string;
    KICK_MEMBERS: string;
    BLOCK_MEMBERS: string;
    UPDATE_CHANNEL: string;
    MESSAGE: string;
    DELETE: string;
    DELETE_MESSAGE: string;
    REACTION_ADDED: string;
    REACTION_DELETED: string;
    EDIT_MESSAGE: string;
    START_TYPING: string;
    STOP_TYPING: string;
    MESSAGE_MARKERS_RECEIVED: string;
    UNREAD_MESSAGES_INFO: string;
    HIDE: string;
    UNHIDE: string;
    MUTE: string;
    UNMUTE: string;
    CHANNEL_MARKED_AS_UNREAD: string;
    CHANNEL_MARKED_AS_READ: string;
    CLEAR_HISTORY: string;
    CHANGE_ROLE: string;
    CHANGE_OWNER: string;
    MEMBER_BLOCKED: string;
    MEMBER_UNBLOCKED: string;
    CHANNEL_EVENT: string;
};
