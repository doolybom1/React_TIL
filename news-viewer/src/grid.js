var grid = new tui.Grid({
    el: $('#grid'),
    data: gridData,
    scrollX: false,
    scrollY: false,
    columns: [
        {
            title: 'Name',
            name: 'name'
        },
        {
            title: 'Artist',
            name: 'artist'
        },
        {
            title: 'Type',
            name: 'type'
        },
        {
            title: 'Release',
            name: 'release'
        },
        {
            title: 'Genre',
            name: 'genre'
        }
    ]
});