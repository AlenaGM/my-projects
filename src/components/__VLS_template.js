import { __VLS_publicComponent, __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './ProjectCard.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_publicComponent, new () => {}>> & InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'card'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'FontAwesomeIcon', typeof __VLS_localComponents, "FontAwesomeIcon", "fontAwesomeIcon", "font-awesome-icon">;
({} as __VLS_IntrinsicElements).article; ({} as __VLS_IntrinsicElements).article;
({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).a; ({} as __VLS_IntrinsicElements).a; ({} as __VLS_IntrinsicElements).a; ({} as __VLS_IntrinsicElements).a; ({} as __VLS_IntrinsicElements).a; ({} as __VLS_IntrinsicElements).a; ({} as __VLS_IntrinsicElements).a; ({} as __VLS_IntrinsicElements).a;
({} as __VLS_IntrinsicElements).picture; ({} as __VLS_IntrinsicElements).picture;
({} as __VLS_IntrinsicElements).source;
({} as __VLS_IntrinsicElements).img;
({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span;
__VLS_components.FontAwesomeIcon; __VLS_components.FontAwesomeIcon; __VLS_components.fontAwesomeIcon; __VLS_components.fontAwesomeIcon; __VLS_components["font-awesome-icon"]; __VLS_components["font-awesome-icon"];
// @ts-ignore
[FontAwesomeIcon, FontAwesomeIcon,];
for (const [{ id, title, info, tech, image, demo, code }] of __VLS_getVForSourceType((__VLS_ctx.projects)!)) {
{
const __VLS_0 = ({} as __VLS_IntrinsicElements)["article"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
({} as __VLS_IntrinsicElements).article;
({} as __VLS_IntrinsicElements).article;
const __VLS_2 = __VLS_1({ ...{}, class: ("gallery__card card"), key: ((id)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("gallery__card card"), key: ((id)), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
{
const __VLS_4 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_5 = __VLS_elementAsFunctionalComponent(__VLS_4);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_6 = __VLS_5({ ...{}, class: ("card__image"), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_4, typeof __VLS_6> & Record<string, unknown>) => void)({ ...{}, class: ("card__image"), });
const __VLS_7 = __VLS_pickFunctionalComponentCtx(__VLS_4, __VLS_6)!;
{
const __VLS_8 = ({} as __VLS_IntrinsicElements)["a"];
const __VLS_9 = __VLS_elementAsFunctionalComponent(__VLS_8);
({} as __VLS_IntrinsicElements).a;
({} as __VLS_IntrinsicElements).a;
const __VLS_10 = __VLS_9({ ...{}, href: ((demo)), target: ("_blank"), rel: ("noreferrer"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_8, typeof __VLS_10> & Record<string, unknown>) => void)({ ...{}, href: ((demo)), target: ("_blank"), rel: ("noreferrer"), });
const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10)!;
{
const __VLS_12 = ({} as __VLS_IntrinsicElements)["picture"];
const __VLS_13 = __VLS_elementAsFunctionalComponent(__VLS_12);
({} as __VLS_IntrinsicElements).picture;
({} as __VLS_IntrinsicElements).picture;
const __VLS_14 = __VLS_13({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_12, typeof __VLS_14> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14)!;
{
const __VLS_16 = ({} as __VLS_IntrinsicElements)["source"];
const __VLS_17 = __VLS_elementAsFunctionalComponent(__VLS_16);
({} as __VLS_IntrinsicElements).source;
const __VLS_18 = __VLS_17({ ...{}, srcset: ((`${image}.webp`)), type: ("image/webp"), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_16, typeof __VLS_18> & Record<string, unknown>) => void)({ ...{}, srcset: ((`${image}.webp`)), type: ("image/webp"), });
const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18)!;
}
{
const __VLS_20 = ({} as __VLS_IntrinsicElements)["img"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
({} as __VLS_IntrinsicElements).img;
const __VLS_22 = __VLS_21({ ...{}, src: ((`${image}.png`)), srcset: ((`${image}.png`)), alt: ((title)), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, src: ((`${image}.png`)), srcset: ((`${image}.png`)), alt: ((title)), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
}
(__VLS_15.slots!).default;
}
(__VLS_11.slots!).default;
}
{
const __VLS_24 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_25 = __VLS_elementAsFunctionalComponent(__VLS_24);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_26 = __VLS_25({ ...{}, class: ("card__image_deco"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_24, typeof __VLS_26> & Record<string, unknown>) => void)({ ...{}, class: ("card__image_deco"), });
const __VLS_27 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26)!;
}
(__VLS_7.slots!).default;
}
{
const __VLS_28 = ({} as __VLS_IntrinsicElements)["a"];
const __VLS_29 = __VLS_elementAsFunctionalComponent(__VLS_28);
({} as __VLS_IntrinsicElements).a;
({} as __VLS_IntrinsicElements).a;
const __VLS_30 = __VLS_29({ ...{}, class: ("card__title"), href: ((demo)), target: ("_blank"), rel: ("noreferrer"), }, ...__VLS_functionalComponentArgsRest(__VLS_29));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_28, typeof __VLS_30> & Record<string, unknown>) => void)({ ...{}, class: ("card__title"), href: ((demo)), target: ("_blank"), rel: ("noreferrer"), });
const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_28, __VLS_30)!;
(title);
(__VLS_31.slots!).default;
}
{
const __VLS_32 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_33 = __VLS_elementAsFunctionalComponent(__VLS_32);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_34 = __VLS_33({ ...{}, class: ("card__content"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_32, typeof __VLS_34> & Record<string, unknown>) => void)({ ...{}, class: ("card__content"), });
const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34)!;
{
const __VLS_36 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_37 = __VLS_elementAsFunctionalComponent(__VLS_36);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_38 = __VLS_37({ ...{}, class: ("card__info"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_36, typeof __VLS_38> & Record<string, unknown>) => void)({ ...{}, class: ("card__info"), });
const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38)!;
(info);
(__VLS_39.slots!).default;
}
{
const __VLS_40 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_42 = __VLS_41({ ...{}, class: ("card__tech"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{}, class: ("card__tech"), });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
{
const __VLS_44 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_45 = __VLS_elementAsFunctionalComponent(__VLS_44);
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_46 = __VLS_45({ ...{}, class: ("tech-text"), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_44, typeof __VLS_46> & Record<string, unknown>) => void)({ ...{}, class: ("tech-text"), });
const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46)!;
{
const __VLS_48 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_49 = __VLS_elementAsFunctionalComponent(__VLS_48);
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_50 = __VLS_49({ ...{}, class: ("tech-text"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_48, typeof __VLS_50> & Record<string, unknown>) => void)({ ...{}, class: ("tech-text"), });
const __VLS_51 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50)!;
(__VLS_51.slots!).default;
}
(tech);
(__VLS_47.slots!).default;
}
{
const __VLS_52 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_53 = __VLS_elementAsFunctionalComponent(__VLS_52);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_54 = __VLS_53({ ...{}, class: ("card__links"), }, ...__VLS_functionalComponentArgsRest(__VLS_53));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_52, typeof __VLS_54> & Record<string, unknown>) => void)({ ...{}, class: ("card__links"), });
const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54)!;
{
const __VLS_56 = ({} as __VLS_IntrinsicElements)["a"];
const __VLS_57 = __VLS_elementAsFunctionalComponent(__VLS_56);
({} as __VLS_IntrinsicElements).a;
({} as __VLS_IntrinsicElements).a;
const __VLS_58 = __VLS_57({ ...{}, href: ((demo)), target: ("_blank"), rel: ("noreferrer"), class: ("tech-text"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_56, typeof __VLS_58> & Record<string, unknown>) => void)({ ...{}, href: ((demo)), target: ("_blank"), rel: ("noreferrer"), class: ("tech-text"), });
const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58)!;
{
let __VLS_60!: 'FontAwesomeIcon' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.FontAwesomeIcon : 'fontAwesomeIcon' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.fontAwesomeIcon : 'font-awesome-icon' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['font-awesome-icon'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['FontAwesomeIcon'];
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ ...{}, icon: ((['fas', 'cat'])), }));
({} as { FontAwesomeIcon: typeof __VLS_60; }).FontAwesomeIcon;
const __VLS_62 = __VLS_61({ ...{}, icon: ((['fas', 'cat'])), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_60, typeof __VLS_62> & Record<string, unknown>) => void)({ ...{}, icon: ((['fas', 'cat'])), });
const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62)!;
}
(__VLS_59.slots!).default;
}
{
const __VLS_64 = ({} as __VLS_IntrinsicElements)["a"];
const __VLS_65 = __VLS_elementAsFunctionalComponent(__VLS_64);
({} as __VLS_IntrinsicElements).a;
({} as __VLS_IntrinsicElements).a;
const __VLS_66 = __VLS_65({ ...{}, href: ((code)), target: ("_blank"), rel: ("noreferrer"), class: ("tech-text"), }, ...__VLS_functionalComponentArgsRest(__VLS_65));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_64, typeof __VLS_66> & Record<string, unknown>) => void)({ ...{}, href: ((code)), target: ("_blank"), rel: ("noreferrer"), class: ("tech-text"), });
const __VLS_67 = __VLS_pickFunctionalComponentCtx(__VLS_64, __VLS_66)!;
{
let __VLS_68!: 'FontAwesomeIcon' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.FontAwesomeIcon : 'fontAwesomeIcon' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.fontAwesomeIcon : 'font-awesome-icon' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['font-awesome-icon'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['FontAwesomeIcon'];
const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({ ...{}, icon: ((['fab', 'github'])), }));
({} as { FontAwesomeIcon: typeof __VLS_68; }).FontAwesomeIcon;
const __VLS_70 = __VLS_69({ ...{}, icon: ((['fab', 'github'])), }, ...__VLS_functionalComponentArgsRest(__VLS_69));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_68, typeof __VLS_70> & Record<string, unknown>) => void)({ ...{}, icon: ((['fab', 'github'])), });
const __VLS_71 = __VLS_pickFunctionalComponentCtx(__VLS_68, __VLS_70)!;
}
(__VLS_67.slots!).default;
}
(__VLS_55.slots!).default;
}
(__VLS_43.slots!).default;
}
(__VLS_35.slots!).default;
}
(__VLS_3.slots!).default;
}
// @ts-ignore
[projects,];
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["gallery__card"];
__VLS_styleScopedClasses["card"];
__VLS_styleScopedClasses["card__image"];
__VLS_styleScopedClasses["card__image_deco"];
__VLS_styleScopedClasses["card__title"];
__VLS_styleScopedClasses["card__content"];
__VLS_styleScopedClasses["card__info"];
__VLS_styleScopedClasses["card__tech"];
__VLS_styleScopedClasses["tech-text"];
__VLS_styleScopedClasses["tech-text"];
__VLS_styleScopedClasses["card__links"];
__VLS_styleScopedClasses["tech-text"];
__VLS_styleScopedClasses["tech-text"];
}
var __VLS_slots!: {};
return __VLS_slots;
}
