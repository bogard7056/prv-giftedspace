# ギフテッドスペース LP サイト

市川市で活動する、生きづらさを抱える若者と家族のためのサードプレイス「ギフテッドスペース」の公式ランディングページです。

> **「土曜日、家族以外のだれかと話せる場所。」**

## 概要

ギフテッドスペースは、生きづらさを抱える若者とそのご家族が、自分らしくいられる居場所を提供するNPO法人（設立準備中）です。毎週土曜 13:30–16:30、市川公民館にて活動しています。

## 現在のバージョン

**Design System v5.0 — "Pop & Warm"**

任意団体らしいポップさと心理的安全性を両立した、ワールドクラスのNPOランディングページです。

## 技術スタック

| カテゴリ | 技術 |
|---------|------|
| マークアップ | HTML5（セマンティック + JSON-LD構造化データ） |
| スタイリング | Tailwind CSS (CDN) + カスタムCSS Design System |
| JavaScript | Vanilla JS（IntersectionObserver, スクロール連動アニメーション） |
| アイコン | Lucide Icons (CDN) |
| フォント | Noto Sans JP + Noto Serif JP (Google Fonts) |
| ホスティング | 静的サイト（サーバー不要） |

## ディレクトリ構成

```
prv-giftedspace/
├── index.html                    # メインLPページ（12セクション構成）
├── css/
│   └── style.css                 # Design System v5.0（カスタムプロパティ・アニメーション・レスポンシブ）
├── js/
│   └── main.js                   # IntersectionObserver・スクロール連動・FAQ・モバイルメニュー
├── assets/
│   ├── images/                   # 画像ファイル（hero-main.jpg）
│   ├── fonts/                    # Webフォント
│   └── icons/                    # アイコン
├── docs/
│   ├── design-guide.md           # デザインガイドライン
│   ├── design-system-specification.md
│   ├── frow-arch-plan.md
│   ├── marketing-strategy.md
│   ├── sns-marketing-plan.md
│   └── story-map.md
├── project/
│   ├── 20_notes/
│   │   └── requirements.md       # 要件定義
│   └── 30_proposal/
│       ├── image-prompts.md      # 画像生成プロンプト（Midjourney + Nano Banana）
│       └── visual-strategy.md    # ビジュアル戦略
├── .gitignore
└── README.md
```

## LP構成（12セクション）

| # | セクション | 内容 |
|---|-----------|------|
| 1 | Hero | キャッチコピー「ここにいていいと思える場所」+ CTA |
| 2 | Numbers | 実績数値（毎週土曜 / ¥500 / 見学無料 / 予約不要） |
| 3 | About | 「ギフテッドスペースとは」概要説明 |
| 4 | Empathy | タブ切替による共感メッセージ（本人向け / 保護者向け） |
| 5 | Founder | 代表者ストーリー + 引用 |
| 6 | Activities | 活動内容カード（バイブコーディング / ホームページ作成 / 談話 / ボードゲーム） |
| 7 | PlayAssess | 認知特性アセスメント「PlayAssess」紹介 + 1日の流れタイムライン |
| 8 | Promise | 5つの約束（安心・自由・尊重・秘密・つながり） |
| 9 | Vision | ビジョンカード（3枚構成） |
| 10 | FAQ | よくある質問（5問、アコーディオン） |
| 11 | CTA | 最終アクション誘導（LINE相談 / 見学申込） |
| 12 | Footer | コピーライト + 固定ボトムバー（モバイル） |

## デザインシステム

### カラーパレット

| 名前 | 用途 | 値 |
|------|------|-----|
| Sage Green | プライマリ（信頼・安心） | `#6B8F71` |
| Terra Cotta | アクセント（温もり・行動） | `#C4856A` |
| Sand | サーフェス | `#F0EBE3` |
| Off White | 背景 | `#FAF8F5` |

### 主な演出

- **浮遊オーブ** — 背景に漂うグラデーション円（sage/terra/sand）
- **Breathing CTA** — 呼吸のように脈動するボタンアニメーション
- **スクロール連動** — IntersectionObserver によるフェードイン・スライドイン
- **ダークモード対応** — `prefers-color-scheme: dark` 完全対応
- **印刷対応** — `@media print` スタイル

### レスポンシブ対応

- **iPhone SE (375px)** — 最小対応幅、`@media (max-width: 380px)`
- **スマートフォン (640px)** — `@media (max-width: 640px)` セクションパディング縮小
- **タブレット (768px)** — オーブ縮小・透過度調整
- **タッチデバイス** — `@media (hover: none)` でホバー無効化、`:active` に置換
- **WCAG 2.1 AA** — タッチターゲット最小44px / CTA 48px
- **Safe Area** — `env(safe-area-inset-bottom)` 対応

## ローカルでの確認方法

```bash
# リポジトリをクローン
git clone https://github.com/bogard7056/prv-giftedspace.git

# ブラウザで直接開く
open index.html

# または VS Code Live Server で開く（推奨）
# index.html を右クリック → "Open with Live Server"
```

## 開発履歴

| コミット | 内容 |
|---------|------|
| `dd96341` | Initial commit — 初期LP構築 |
| `587ef52` | v5.0 Pop & Warm redesign — ワールドクラスNPO LP + Nano Banana画像プロンプト |
| `1c01322` | モバイル/レスポンシブ全面改善（iPhone SE〜タブレット） |
| `2368176` | .gitignore に .agent/ 追加 |

## 今後の課題

- [ ] 実写写真の差し替え（現在はプレースホルダー画像）
- [ ] OG画像の作成・設定
- [ ] ファビコン設定
- [ ] Tailwind CSS 本番ビルド（CDN → npx tailwindcss）
- [ ] 参加者の声セクション追加
- [ ] Google Analytics / Search Console 導入
- [ ] お問い合わせフォーム実装（Google Forms or Formspree）

---

© 2025 Gifted Space Ichikawa. All Rights Reserved.
