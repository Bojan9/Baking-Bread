      const instance = Bricks({
        container: '.brickContainer',
        packed: 'data-packed',
        position:  true,
        sizes: [
          { columns: 2, gutter: 10 },
          { mq: '768px', columns: 3, gutter: 25 },
          { mq: '1024px', columns: 4, gutter: 10 }
        ]
      })
        .resize(true)
        .pack()
