<template>
    <div class="header-search-module">
        <div class="header-search-block"><input class="header-search-input" type="text" placeholder="搜索商家或地点"><button
                class="header-search-btn"><span class="el-icon-search"></span></button></div>
        <div class="header-search-suggest">
            <div class="header-search-noinput">
                <div class="header-search-history" style="display: none;">
                    <h6>最近搜索</h6><span class="header-search-clean">删除搜索历史</span>
                    <ul></ul>
                </div>
            </div>
            <div class="header-search-hasinput">
                <ul></ul>
            </div>
        </div>
        <div class="header-search-hotword"></div>
    </div>
</template>
<style lang="less" scoped>
.header-search-module {
    float: left;
    padding-top: 28px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    z-index: 999;

    .header-search-block {
        width: 550px;
        height: 40px;
        background: #fff;

        .header-search-input {
            border: 1px solid #E5E5E5;
            border-right: none;
            border-radius: 4px 0 0 4px;
            line-height: 100%;
            box-sizing: border-box;
            display: inline-block !important;
            padding: 15px;
            font-size: 14px;
            height: 100%;
            background: transparent;
            width: 85.45%;
        }

        .header-search-btn {
            outline: none;
            width: 14.55%;
            box-sizing: border-box;
            line-height: 100%;
            height: 100%;
            background: #FFC300;
            border: none;
            float: right;
            color: #222222;
            cursor: pointer;
            border-bottom-right-radius: 4px;
            border-top-right-radius: 4px;
        }
        .el-icon-search{
            font-size: 22px;
        }
    }

    .header-search-suggest {
        width: 85.45%;
        display: none;
        box-sizing: border-box;
        position: absolute;
        border: 1px solid #E5E5E5;
        border-top: none;
        background: #fff;
        z-index: 999;
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        color: #999;
        font-size: 12px;
        text-align: left;

        .header-search-noinput {
            display: block;
            padding: 10px;

            h6 {
                margin: 0;
                padding-bottom: 5px;
            }

            .header-search-clean {
                position: absolute;
                top: 10px;
                right: 10px;
                cursor: pointer;
            }

            ul {
                padding: 5px 3px 10px;
            }
        }
    }

    .header-search-hotword {
        padding-top: 8px;
        font-size: 12px;
        width: 550px;
        overflow: hidden;
        height: 25px;
        box-sizing: border-box;
        text-align: left;
        padding-left: 12px;
    }
}
</style>