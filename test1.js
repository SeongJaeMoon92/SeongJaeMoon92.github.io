    var ypos = 0, newxpos = 0, rowOffsets = [];
    var legendItemsCount = svg.selectAll('.legend').size();

    legend.attr("transform", function (d, index) {
        var length = d3.select(this).select("text").node().getComputedTextLength() + (legendRectSize + legendSpacing * 3);

        if (width < newxpos + length) {
            rowOffsets.push((width - newxpos) / 2);
            newxpos = 0;
            ypos += 30;
        }

        d.x = newxpos;
        d.y = ypos;
        d.rowNo = rowOffsets.length;
        newxpos += length;

        if (index === legendItemsCount - 1)
            rowOffsets.push((width - newxpos) / 2);
    });

    legend.attr("transform", function (d, i) {
        var x = d.x + rowOffsets[d.rowNo];
        return 'translate(' + x + ',' + d.y + ')';
    });