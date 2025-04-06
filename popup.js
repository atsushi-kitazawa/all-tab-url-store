document.getElementById('saveUrls').addEventListener('click', async () => {
    // 全タブの情報を取得
    const tabs = await chrome.tabs.query({});
    
    // タイトルとURLを配列で保持
    const tabData = tabs.map(tab => ({
      title: tab.title,
      url: tab.url
    }));
    
    // JSON形式に変換
    const jsonContent = JSON.stringify(tabData, null, 2);
    
    // 本日日付を取得
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // YYYY-MM-DD形式
    
    // ファイル名を生成
    const fileName = `tabs_${formattedDate}.json`;
    
    // JSONファイルとして保存
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    // ダウンロードリンクを作成してクリック
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    
    // リソース解放
    URL.revokeObjectURL(url);
  });
  