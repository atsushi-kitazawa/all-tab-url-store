document.getElementById('saveUrls').addEventListener('click', async () => {
    // 全タブの情報を取得
    const tabs = await chrome.tabs.query({});
    
    // URLリストを生成
    const urls = tabs.map(tab => tab.url).join('\n');
    
    // ファイルとして保存
    const blob = new Blob([urls], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    // ダウンロードリンクを作成してクリック
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tabs_urls.txt';
    a.click();
    
    // リソース解放
    URL.revokeObjectURL(url);
  });
  