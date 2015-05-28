/**
 * @file editor.js
 * @author mengke01(kekee000@gmail.com)
 */

define(
    function (require) {
        return {
            glyph_name: '命名',
            left_side_bearing: '左边轴',
            right_side_bearing: '右边轴',
            baseline_offset: '基线偏移',
            flip: '翻转',
            mirror: '镜像',

            scale: '按比例缩放',
            findglyf: '查找字形',
            setunicode: '设置代码点',
            del: '删除',
            edit: '编辑',
            resume: '恢复',
            prevpage: '上一页',
            nextpage: '下一页',
            gotopage: '转到',

            saveas: '另存为',
            sync: '同步',
            syncfont: '同步字体',
            cancelsync: '取消同步',
            autosync: '自动同步',
            fonttype: '字体类型',
            remoteurl: '远程地址',
            fontname: '字体名称',
            fontinfo: '字体信息',
            ascent: '上升',
            descent: '下降',
            linegap: '行间距',
            usWinAscent: 'win上升',
            usWinDescent: 'win下降',
            calc: '计算',
            sTypoAscender: 'typo上升',
            sTypoDescender: 'typo下降',
            sTypoLineGap: 'typo间距',
            sxHeight: 'x高度',
            sCapHeight: '大写H高度',
            yStrikeoutPosition: '删除线位置',
            yStrikeoutSize: '删除线厚度',
            underlinePosition: '下划线位置',
            underlineThickness: '下划线厚度',
            ySubscriptXSize: '下标水平',
            ySubscriptYSize: '下标垂直',
            ySubscriptXOffset: '下标X偏移',
            ySubscriptYOffset: '下标Y偏移',
            ySuperscriptXSize: '上标水平',
            ySuperscriptYSize: '上标垂直',
            ySuperscriptXOffset: '上标X偏移',
            ySuperscriptYOffset: '上标Y偏移',
            achVendID: '供应商ID',
            usWeightClass: '粗细',
            usWidthClass: '宽度',
            panose: 'panose',

            fontFamily: '字体家族',
            fontSubFamily: '子字体家族',
            fullName: '完整字体名',
            uniqueSubFamily: '唯一字体识别名',
            version: '版本',
            postScriptName: 'PostScript名称',
            unitsPerEm: 'em框大小',
            lowestRecPPEM: '最小可读尺寸',
            created: '创建日期'

        };
    }
);