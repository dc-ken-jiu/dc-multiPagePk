/*
 * @Description:
 * @Author: dingxuejin
 * @Date: 2021-02-01 14:53:16
 * @LastEditTime: 2021-04-27 11:39:31
 * @LastEditors: dingxuejin
 */
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const { setEntryAndHtmlPlugin } = require("../../index");

const entryFile = ["page-1", "page-2", "home"];

const { entry, htmlWebpackPlugins } = setEntryAndHtmlPlugin(entryFile);

module.exports = {
    entry: entry,
    output: {
        path: path.join(__dirname, "..", "dist"),
        filename: "[name].js",
        publicPath: "/",
    },
    devServer: {
        contentBase: "./dist",
        quiet: true
    },
    plugins: [].concat(htmlWebpackPlugins.map((item) => {
        return new HtmlWebpackPlugin(item);
    }))
}