import { StepItem, TestimonialItem, FaqItem, FeatureItem } from './types';
import { Heart, Edit3, ShoppingBag } from 'lucide-react';

export const APP_NAME = "〇〇〇〇"; // Replace with actual name

export const HERO_CONTENT = {
  title: `${APP_NAME}の使い方`,
  subtitle: "クリエイター活動を\nもっと楽しく、もっと自由に！",
};

export const INTRO_CONTENT = {
  title: `${APP_NAME}ってなぁに？`,
  description: `大人からお子様まで、すべての個人・法人などモノを売りたい人と、応援したい・購入したい人を繋げるファンクラブとショップのプラットホーム。\n\n登録後は、あなたの専用ページがすぐに作成できて活動が始められます！`,
};

export const FEATURES: FeatureItem[] = [
  {
    title: "ファンクラブ機能",
    description: "月額プランを作成して、コアなファンと繋がれます。",
    icon: Heart
  },
  {
    title: "記事投稿機能",
    description: "ブログや限定コンテンツを投稿して発信できます。",
    icon: Edit3
  },
  {
    title: "ショップ機能",
    description: "デジタルコンテンツやグッズを販売できます。",
    icon: ShoppingBag
  }
];

export const STEPS: StepItem[] = [
  {
    stepNumber: 1,
    title: "登録をしよう！",
    description: "まずはアカウント作成。SNS連携またはメールアドレスですぐに登録完了します。",
    imageAlt: "スマートフォンで登録画面を開いているイラスト"
  },
  {
    stepNumber: 2,
    title: "ファンクラブやショップを開設しよう！",
    description: "マイページから「開設する」ボタンをタップ。あなたのショップ名を決めましょう。",
    imageAlt: "お店を開く準備をしているイラスト"
  },
  {
    stepNumber: 3,
    title: "プランをつくろう！",
    description: "ファンクラブの月額プランを作成。特典内容を決めて公開しましょう。",
    imageAlt: "プラン設定画面のイラスト"
  },
  {
    stepNumber: 4,
    title: "投稿をしてみよう！",
    description: "日記やイラスト、動画などを投稿。ファン限定公開も可能です。",
    imageAlt: "記事を書いている様子のイラスト"
  },
  {
    stepNumber: 5,
    title: "商品を販売しよう！",
    description: "デジタル素材やグッズを登録。価格を設定して販売開始！",
    imageAlt: "商品を並べているイラスト"
  },
  {
    stepNumber: 6,
    title: "ファンと交流しよう！",
    description: "コメントやメッセージ機能を使って、応援してくれるファンと交流できます。",
    imageAlt: "ファンと楽しく話しているイラスト"
  },
  {
    stepNumber: 7,
    title: "売上を出金しよう！",
    description: "貯まった売上は申請することで指定口座へ振り込まれます。",
    imageAlt: "通帳やコインのイラスト"
  }
];

export const PAYMENT_INFO = {
  title: "決済について",
  description: "クレジットカードのみの決済が利用可能です。",
  cards: ["VISA", "MasterCard", "JCB", "American Express"]
};

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: "イラストレーター Aさん",
    comment: "自分のイラストをグッズにして販売しています。設定がとても簡単でした！",
    avatarId: 10
  },
  {
    id: 2,
    name: "動画クリエイター Bさん",
    comment: "ファンクラブ機能で限定動画を公開しています。ファンの反応が嬉しいです。",
    avatarId: 20
  },
  {
    id: 3,
    name: "コスプレイヤー Cさん",
    comment: "写真集の販売に使っています。スマホだけで完結するのが便利！",
    avatarId: 30
  },
  {
    id: 4,
    name: "VTuber Dさん",
    comment: "ボイス販売と支援プランを併用しています。手数料も分かりやすいです。",
    avatarId: 40
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "初期費用はかかりますか？",
    answer: "初期費用・月額費用は一切かかりません。売上が発生した際の手数料のみです。"
  },
  {
    question: "法人でも利用できますか？",
    answer: "はい、個人・法人問わずご利用いただけます。"
  },
  {
    question: "未成年でも利用できますか？",
    answer: "保護者の同意があればご利用いただけます。詳しくは利用規約をご確認ください。"
  },
  {
    question: "退会はいつでもできますか？",
    answer: "はい、マイページの設定からいつでも退会手続きが可能です。"
  }
];

export const LINKS = [
  { title: "ユーザーガイド", url: "#" },
  { title: "ヘルプ", url: "#" },
  { title: "利用規約", url: "#" }
];