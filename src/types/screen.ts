import { BoArticle } from "./boArticle";
import { Follower, Following } from "./follow";
import { Order } from "./order";
import { Product } from "./product";
import { Member, Shop } from "./user";

/** REACT APP STATE */
export interface AppRootState {
    homePage: HomePageState;
    shopPage: ShopPageState;
    ordersPage: OrdersPageState;
    communityPage: CommunityPageState;
    memberPage: MemberPageState;
}

/** HOMEPAGE */
export interface HomePageState {
    topShops: Shop[];
    bestShops: Shop[];
    trendProducts: Product[];
    bestBoArticles: BoArticle[];
    trendBoArticles: BoArticle[];
    newsBoArticles: BoArticle[];
}

/** SHOP PAGE */
export interface ShopPageState {
    targetShops: Shop[];
    randomShops: Shop[];
    chosenShops: Shop | null;
    targetProducts: Product[];
    chosenProduct: Product | null;
}

/** ORDERS PAGE */
export interface OrdersPageState {
    pausedOrders: Order[],
    processOrders: Order[],
    finishedOrders: Order[]
}

/** COMMUNITIY PAGE */
export interface CommunityPageState {
    targetBoArticles: BoArticle[]
}

/** MEMBER PAGE */
export interface MemberPageState {
    chosenMember: Member | null;
    chosenMemberBoArticles: BoArticle[];
    chosenSingleBoArticle: BoArticle | null;
    memberFollowers: Follower[];
    memberFollowings: Following[];
}
